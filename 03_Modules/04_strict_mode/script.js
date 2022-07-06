"use strict";

const userList = ["Mercedes", "Dennis"];

const user = {
  name: "Maxim",
  greetUser: function () {
    alert(`Hello ${this.name}`);
  },
};

function getUserData(name, id) {
  console.log(this);
}

getUserData();

userList.push("Salem");

const users = 3;

function increaseUsers() {
  users++;
}
