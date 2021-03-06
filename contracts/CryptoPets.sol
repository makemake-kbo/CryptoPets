// SPDX-License-Identifier: 3BSD
pragma solidity 0.8.1;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract CryptoPets is ERC721, Ownable {
    
    using Strings for uint256;
    
    // Optional mapping for token URIs
    mapping (uint256 => string) private _tokenURIs;
    mapping (uint256 => string) private _tokenPetName;

    // Base URI
    string private _baseURIextended;
    
    // Current token ID for minting new tokens
    uint16 private currentTokenID = 0;

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}
    
    function setBaseURI(string memory baseURI_) external onlyOwner() {
        _baseURIextended = baseURI_;
    }
    
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function _setPetName(uint256 tokenId, string memory _petName) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: Pet name set of nonexistent token");
        _tokenPetName[tokenId] = _petName;
    }

    function _baseURI() internal view virtual override returns (string memory) {
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
    
    function viewPetName(uint256 tokenId) public view returns(string memory) {
        string memory petName = _tokenPetName[tokenId];
        return petName;
    }

    function mint(
        address _to,
        string memory tokenURI_,
        string memory _petName
    ) external {
        _mint(_to, currentTokenID);
        _setTokenURI(currentTokenID, tokenURI_);
        _setPetName(currentTokenID, _petName);
        unchecked{currentTokenID++;}
    }
}
