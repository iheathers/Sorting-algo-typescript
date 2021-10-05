"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.addNode = function (data) {
        console.log('Adding node...');
        var newNode = new Node_1.LinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var size = 1;
            var selectedNode = this.head;
            if (selectedNode) {
                while (selectedNode.next) {
                    selectedNode = selectedNode.next;
                    size++;
                }
            }
            return size;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head || index > this.length - 1) {
            throw new Error('Index out of range.');
        }
        var currentNode = this.head;
        for (var i = 0; i < index; i++) {
            if (currentNode.next) {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        console.log('Comparing Nodes...');
        if (!this.head) {
            throw new Error('Nothing to compare');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        console.log('Swapping nodes...');
        var leftHandData = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = leftHandData;
    };
    LinkedList.prototype.print = function () {
        console.log('Printing...');
        if (!this.head) {
            console.log('Empty');
            return;
        }
        var currentNode = this.head;
        for (var i = 0; i < this.length; i++) {
            if (currentNode) {
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        }
        // while (currentNode) {
        //   // if (currentNode.next) {
        //   console.log(currentNode.data);
        //   currentNode = currentNode.next;
        //   // }
        // }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
