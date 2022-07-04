/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./resources/js/components/countUp.js ***!
  \********************************************/
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Find thes the thing I want to Track
var tracking = document.querySelector('#trackMe');
var options = {
  root: null,
  threshold: 0.6,
  rootMargin: "-150px"
};
var theObserver = new IntersectionObserver(doSomething, options);

function doSomething(entries) {
  var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];

  if (entry.isIntersecting) {
    // Do Something when in view
    counting();
  } else {
    console.log('no you dont!');
  }
}

;
theObserver.observe(tracking);

function counting() {
  // Selects the counter or the thing we want to count
  var counters = document.querySelectorAll('.counter'); // Lower number the quicker the count

  var speed = 250;
  var i = 0; // Takes each counter and runs a function to update the numbers to the target

  counters.forEach(function (counter) {
    var updateCount = function updateCount() {
      // Reads the number from the data-target, the + is there to convert it from a string to a number
      var target = +counter.getAttribute('data-target');
      var count = +counter.innerText;
      var inc = target / speed; // If the number hasnt reached the target amount keep adding.

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 10);
      } else {
        count.innerText = target;
      }
    };

    updateCount();
  });
} //     const countersLength = counters.length;
//     console.log(countersLength);
//
// //    Count up First Counter
//     console.log(counters[0]);
//     const updateCount = () => {
//         // Reads the number from the data-target, the + is there to convert it from a string to a number
//         const target = +counters[i].getAttribute('data-target');
//         const count = +counter[i].innerText;
//         const inc = target / speed;
//         // If the number hasnt reached the target amount keep adding.
//         if (count < target) {
//             counters[i].innerText = Math.ceil(count + inc);
//             setTimeout(updateCount, 1)
//         } else {
//             count.innerText = target;
//         }
//     }
//
//     updateCount();
//
/******/ })()
;