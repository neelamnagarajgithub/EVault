// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.24;

contract store{
   string  public ipfsHash;

    function set(string memory x) public {
       ipfsHash = x;
    }

    function get() public view returns (string memory) {
        return ipfsHash;
    }
}