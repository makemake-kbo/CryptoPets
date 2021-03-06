// SPDX-License-Identifier: 3BSD
pragma solidity 0.7.6;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";

contract CryptoPets is ERC721, Ownable {
    
    using Strings for uint256;
    
    // Optional mapping for token URIs
    mapping (uint256 => string) private _tokenURIs;
    mapping (uint256 => string) private _tokenPetName;

    // Base URI
    string private _baseURIextended;
    
    // Curre token ID for minting
    uint16 public currentTokenID = 0;

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}
    
    function setBaseURI(string memory baseURI_) external onlyOwner() {
        _baseURIextended = baseURI_;
    }
    
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal override virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function _setPetName(uint256 tokenId, string memory _petName) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: Pet name set of nonexistent token");
        _tokenPetName[tokenId] = _petName;
    }

    function _baseURI() internal view virtual returns (string memory) {
        return _baseURIextended;
    }
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();
        
        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }
        // If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.
        return string(abi.encodePacked(base, tokenId.toString()));
    }

    function mint(
        address _to,
        string memory tokenURI_,
        string memory _petName
    ) external onlyOwner() {
        require(!(_exists(127)), "ERC721: Token Limit reached!");
        _mint(_to, currentTokenID);
        _setTokenURI(currentTokenID, tokenURI_);
        _setPetName(currentTokenID, _petName);
        currentTokenID++;
    }
}