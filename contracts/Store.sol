// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Store {
    address public owner;
    string public ipfsHash;

    constructor() {
        owner = msg.sender;
    }

    function set(string memory _ipfsHash) public {
        require(msg.sender == owner, "Only the owner can set the IPFS hash");
        ipfsHash = _ipfsHash;
    }

    function get() public view returns (string memory) {
        return ipfsHash;
    }
}