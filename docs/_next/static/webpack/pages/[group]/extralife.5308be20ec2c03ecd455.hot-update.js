webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./pages/[group]/extralife.jsx":
/*!*************************************!*\
  !*** ./pages/[group]/extralife.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/molecules/team-member-cards */ "./components/molecules/team-member-cards.jsx");
/* harmony import */ var _components_atoms_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/atoms/header */ "./components/atoms/header.jsx");
/* harmony import */ var _components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/atoms/loading-icon */ "./components/atoms/loading-icon.jsx");
/* harmony import */ var _components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/atoms/progress-bar */ "./components/atoms/progress-bar.jsx");
/* harmony import */ var _components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/organisms/streamer-schedule */ "./components/organisms/streamer-schedule.jsx");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/utils */ "./src/utils.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\pages\\[group]\\extralife.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import Head from 'next/head';








var data = __webpack_require__(/*! ./data.json */ "./pages/[group]/data.json");

var API_BASE = 'https://www.extra-life.org/api';

function sortSchedule(schedule) {
  return schedule.filter(function (stream) {
    return new Date() < new Date(stream.timeEnd);
  }).sort(function (a, b) {
    return new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime();
  });
}

function getScheduleTimeRange(schedule) {
  var start = new Date(schedule[0].timeStart);
  var end = new Date(schedule[schedule.length - 1].timeEnd);
  return {
    start: start,
    end: end
  };
}

function sortParticipants(participants) {
  return participants.sort(function (a, b) {
    if (a.streamIsLive && !b.streamIsLive) return -1;
    if (b.streamIsLive && !a.streamIsLive) return 1;
    return a.displayName.localeCompare(b.displayName);
  }).map(function (member) {
    var _member$links;

    var newMember = _objectSpread(_objectSpread({}, member), {}, {
      avatarImageURL: "https:".concat(member.avatarImageURL)
    });

    if (member === null || member === void 0 ? void 0 : (_member$links = member.links) === null || _member$links === void 0 ? void 0 : _member$links.stream) {
      var stream = member.links.stream;
      var regex = stream.match(/channel=(.*)/);

      if (regex === null || regex === void 0 ? void 0 : regex[1]) {
        newMember = _objectSpread(_objectSpread({}, newMember), {}, {
          twitchUsername: regex[1]
        });
        return newMember;
      }
    }

    return newMember;
  });
}

var ExtraLifeTeam = function ExtraLifeTeam() {
  _s();

  var _groupData$schedule;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var group = router.query.group;
  var groupData = data[group];
  var schedule = (groupData === null || groupData === void 0 ? void 0 : (_groupData$schedule = groupData.schedule) === null || _groupData$schedule === void 0 ? void 0 : _groupData$schedule.length) ? sortSchedule(groupData.schedule) : [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      team = _useState[0],
      setTeam = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function fetchTeam() {
      return _fetchTeam.apply(this, arguments);
    }

    function _fetchTeam() {
      _fetchTeam = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, fetchedTeam;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_BASE, "/teams/").concat(groupData.id));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                fetchedTeam = _context.sent;
                return _context.abrupt("return", fetchedTeam);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchTeam.apply(this, arguments);
    }

    function fetchTeamMembers() {
      return _fetchTeamMembers.apply(this, arguments);
    }

    function _fetchTeamMembers() {
      _fetchTeamMembers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, fetchedTeamMembers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_BASE, "/teams/").concat(groupData.id, "/participants"));

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res.json();

              case 5:
                fetchedTeamMembers = _context2.sent;
                return _context2.abrupt("return", fetchedTeamMembers);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _fetchTeamMembers.apply(this, arguments);
    }

    function getData() {
      return _getData.apply(this, arguments);
    }

    function _getData() {
      _getData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var results, participants, newTeam;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all([fetchTeam(), fetchTeamMembers()]);

              case 2:
                results = _context3.sent;
                //! TEST
                // TODO REMOVE THIS
                // results[1][11].streamIsLive = true;
                //!
                participants = sortParticipants(results[1]);
                newTeam = _objectSpread(_objectSpread({}, results[0]), {}, {
                  participants: participants
                });
                setTeam(newTeam);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _getData.apply(this, arguments);
    }

    if (groupData === null || groupData === void 0 ? void 0 : groupData.id) getData();
  }, [groupData]);
  if (!(team === null || team === void 0 ? void 0 : team.participants)) return __jsx(_components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 35
    }
  });
  var scheduleTimeRange = getScheduleTimeRange(schedule);
  var isEventLive = Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__["default"])(scheduleTimeRange.start, scheduleTimeRange.end);
  return __jsx("div", {
    className: "jsx-460309623" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx(_components_atoms_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: team.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), __jsx("a", {
    href: team.links.page,
    className: "jsx-460309623" + " " + "teamLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Join Team"), __jsx(_components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    progress: team.sumDonations,
    goal: team.fundraisingGoal,
    progressText: "Raised",
    goalText: "Goal",
    isMoney: true,
    width: 80,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }), (schedule === null || schedule === void 0 ? void 0 : schedule.length) && isEventLive && __jsx("div", {
    className: "jsx-460309623" + " " + "streamerSchedule live",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-460309623",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, "Live Schedule"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-460309623" + " " + "teamMembers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-460309623",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, "Team Members"), __jsx(_components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_7__["default"], {
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })), (schedule === null || schedule === void 0 ? void 0 : schedule.length) && !isEventLive && __jsx("div", {
    className: "jsx-460309623" + " " + "streamerSchedule upcoming",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-460309623",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, "Upcoming Event"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "460309623",
    __self: _this
  }, ".page.jsx-460309623{width:100%;display:grid;justify-items:center;min-width:480px;}.teamLink.jsx-460309623{color:#fff;font-size:24px;}.teamMembers.jsx-460309623{margin-top:40px;}.streamerSchedule.jsx-460309623{margin-top:40px;width:100%;max-width:800px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0lTLEFBR3dCLEFBTUEsQUFPSyxBQUdBLFdBZkgsQUFNRSxLQU9qQixBQUdhLFFBZlUsRUFNdkIsQ0FVa0IsZ0JBQ2xCLEVBaEJrQixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcW2dyb3VwXVxcZXh0cmFsaWZlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVGVhbU1lbWJlckNhcmRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RlYW0tbWVtYmVyLWNhcmRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2hlYWRlcic7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2xvYWRpbmctaWNvbic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBTdHJlYW1lclNjaGVkdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL3N0cmVhbWVyLXNjaGVkdWxlJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJyk7XHJcblxyXG5jb25zdCBBUElfQkFTRSA9ICdodHRwczovL3d3dy5leHRyYS1saWZlLm9yZy9hcGknO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgcmV0dXJuIGEuZGlzcGxheU5hbWUubG9jYWxlQ29tcGFyZShiLmRpc3BsYXlOYW1lKTtcclxuICAgIH0pXHJcbiAgICAubWFwKChtZW1iZXIpID0+IHtcclxuICAgICAgbGV0IG5ld01lbWJlciA9IHtcclxuICAgICAgICAuLi5tZW1iZXIsXHJcbiAgICAgICAgYXZhdGFySW1hZ2VVUkw6IGBodHRwczoke21lbWJlci5hdmF0YXJJbWFnZVVSTH1gLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAobWVtYmVyPy5saW5rcz8uc3RyZWFtKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdHJlYW0gfSA9IG1lbWJlci5saW5rcztcclxuICAgICAgICBjb25zdCByZWdleCA9IHN0cmVhbS5tYXRjaCgvY2hhbm5lbD0oLiopLyk7XHJcbiAgICAgICAgaWYgKHJlZ2V4Py5bMV0pIHtcclxuICAgICAgICAgIG5ld01lbWJlciA9IHsgLi4ubmV3TWVtYmVyLCB0d2l0Y2hVc2VybmFtZTogcmVnZXhbMV0gfTtcclxuICAgICAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgRXh0cmFMaWZlVGVhbSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdyb3VwIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YVtncm91cF07XHJcbiAgY29uc3Qgc2NoZWR1bGUgPSBncm91cERhdGE/LnNjaGVkdWxlPy5sZW5ndGhcclxuICAgID8gc29ydFNjaGVkdWxlKGdyb3VwRGF0YS5zY2hlZHVsZSlcclxuICAgIDogW107XHJcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9YCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtTWVtYmVycygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfS9wYXJ0aWNpcGFudHNgKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW1NZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtTWVtYmVycztcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2hUZWFtKCksIGZldGNoVGVhbU1lbWJlcnMoKV0pO1xyXG4gICAgICAvLyEgVEVTVFxyXG4gICAgICAvLyBUT0RPIFJFTU9WRSBUSElTXHJcbiAgICAgIC8vIHJlc3VsdHNbMV1bMTFdLnN0cmVhbUlzTGl2ZSA9IHRydWU7XHJcbiAgICAgIC8vIVxyXG4gICAgICBjb25zdCBwYXJ0aWNpcGFudHMgPSBzb3J0UGFydGljaXBhbnRzKHJlc3VsdHNbMV0pO1xyXG5cclxuICAgICAgY29uc3QgbmV3VGVhbSA9IHtcclxuICAgICAgICAuLi5yZXN1bHRzWzBdLFxyXG4gICAgICAgIHBhcnRpY2lwYW50cyxcclxuICAgICAgfTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwRGF0YV0pO1xyXG4gIGlmICghdGVhbT8ucGFydGljaXBhbnRzKSByZXR1cm4gPExvYWRpbmdJY29uIC8+O1xyXG5cclxuICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKTtcclxuICBjb25zdCBpc0V2ZW50TGl2ZSA9IGNoZWNrSWZFdmVudElzTGl2ZShcclxuICAgIHNjaGVkdWxlVGltZVJhbmdlLnN0YXJ0LFxyXG4gICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgIDxIZWFkZXIgdGl0bGU9e3RlYW0ubmFtZX0gLz5cclxuICAgICAgPGEgaHJlZj17dGVhbS5saW5rcy5wYWdlfSBjbGFzc05hbWU9XCJ0ZWFtTGlua1wiPlxyXG4gICAgICAgIEpvaW4gVGVhbVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgIHByb2dyZXNzPXt0ZWFtLnN1bURvbmF0aW9uc31cclxuICAgICAgICBnb2FsPXt0ZWFtLmZ1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgIGdvYWxUZXh0PVwiR29hbFwiXHJcbiAgICAgICAgaXNNb25leVxyXG4gICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgLz5cclxuICAgICAge3NjaGVkdWxlPy5sZW5ndGggJiYgaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSBsaXZlXCI+XHJcbiAgICAgICAgICA8aDI+TGl2ZSBTY2hlZHVsZTwvaDI+XHJcbiAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICBzY2hlZHVsZT17c2NoZWR1bGV9XHJcbiAgICAgICAgICAgIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbU1lbWJlcnNcIj5cclxuICAgICAgICA8aDI+VGVhbSBNZW1iZXJzPC9oMj5cclxuICAgICAgICA8VGVhbU1lbWJlckNhcmRzIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoICYmICFpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIHVwY29taW5nXCI+XHJcbiAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxyXG4gICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbUxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW1NZW1iZXJzLFxyXG4gICAgICAgICAgLnN0ZWFtZXJTY2hlZHVsZSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */"));
};

_s(ExtraLifeTeam, "kDlXXRrZHuZkgo2sTus0O9zmC6U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = ExtraLifeTeam;
/* harmony default export */ __webpack_exports__["default"] = (ExtraLifeTeam);

var _c;

$RefreshReg$(_c, "ExtraLifeTeam");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwiQVBJX0JBU0UiLCJzb3J0U2NoZWR1bGUiLCJzY2hlZHVsZSIsImZpbHRlciIsInN0cmVhbSIsIkRhdGUiLCJ0aW1lRW5kIiwic29ydCIsImEiLCJiIiwidGltZVN0YXJ0IiwiZ2V0VGltZSIsImdldFNjaGVkdWxlVGltZVJhbmdlIiwic3RhcnQiLCJlbmQiLCJsZW5ndGgiLCJzb3J0UGFydGljaXBhbnRzIiwicGFydGljaXBhbnRzIiwic3RyZWFtSXNMaXZlIiwiZGlzcGxheU5hbWUiLCJsb2NhbGVDb21wYXJlIiwibWFwIiwibWVtYmVyIiwibmV3TWVtYmVyIiwiYXZhdGFySW1hZ2VVUkwiLCJsaW5rcyIsInJlZ2V4IiwibWF0Y2giLCJ0d2l0Y2hVc2VybmFtZSIsIkV4dHJhTGlmZVRlYW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJncm91cCIsInF1ZXJ5IiwiZ3JvdXBEYXRhIiwidXNlU3RhdGUiLCJ0ZWFtIiwic2V0VGVhbSIsInVzZUVmZmVjdCIsImZldGNoVGVhbSIsImZldGNoIiwiaWQiLCJyZXMiLCJqc29uIiwiZmV0Y2hlZFRlYW0iLCJmZXRjaFRlYW1NZW1iZXJzIiwiZmV0Y2hlZFRlYW1NZW1iZXJzIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXN1bHRzIiwibmV3VGVhbSIsInNjaGVkdWxlVGltZVJhbmdlIiwiaXNFdmVudExpdmUiLCJjaGVja0lmRXZlbnRJc0xpdmUiLCJuYW1lIiwicGFnZSIsInN1bURvbmF0aW9ucyIsImZ1bmRyYWlzaW5nR29hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsZ0NBQWpCOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLFFBQXRCLEVBQWdDO0FBQzlCLFNBQU9BLFFBQVEsQ0FDWkMsTUFESSxDQUNHLFVBQUNDLE1BQUQsRUFBWTtBQUNsQixXQUFPLElBQUlDLElBQUosS0FBYSxJQUFJQSxJQUFKLENBQVNELE1BQU0sQ0FBQ0UsT0FBaEIsQ0FBcEI7QUFDRCxHQUhJLEVBSUpDLElBSkksQ0FLSCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUNFLElBQUlKLElBQUosQ0FBU0csQ0FBQyxDQUFDRSxTQUFYLEVBQXNCQyxPQUF0QixLQUFrQyxJQUFJTixJQUFKLENBQVNJLENBQUMsQ0FBQ0MsU0FBWCxFQUFzQkMsT0FBdEIsRUFEcEM7QUFBQSxHQUxHLENBQVA7QUFRRDs7QUFFRCxTQUFTQyxvQkFBVCxDQUE4QlYsUUFBOUIsRUFBd0M7QUFDdEMsTUFBTVcsS0FBSyxHQUFHLElBQUlSLElBQUosQ0FBU0gsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZUSxTQUFyQixDQUFkO0FBQ0EsTUFBTUksR0FBRyxHQUFHLElBQUlULElBQUosQ0FBU0gsUUFBUSxDQUFDQSxRQUFRLENBQUNhLE1BQVQsR0FBa0IsQ0FBbkIsQ0FBUixDQUE4QlQsT0FBdkMsQ0FBWjtBQUNBLFNBQU87QUFBRU8sU0FBSyxFQUFMQSxLQUFGO0FBQVNDLE9BQUcsRUFBSEE7QUFBVCxHQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsZ0JBQVQsQ0FBMEJDLFlBQTFCLEVBQXdDO0FBQ3RDLFNBQU9BLFlBQVksQ0FDaEJWLElBREksQ0FDQyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNkLFFBQUlELENBQUMsQ0FBQ1UsWUFBRixJQUFrQixDQUFDVCxDQUFDLENBQUNTLFlBQXpCLEVBQXVDLE9BQU8sQ0FBQyxDQUFSO0FBQ3ZDLFFBQUlULENBQUMsQ0FBQ1MsWUFBRixJQUFrQixDQUFDVixDQUFDLENBQUNVLFlBQXpCLEVBQXVDLE9BQU8sQ0FBUDtBQUN2QyxXQUFPVixDQUFDLENBQUNXLFdBQUYsQ0FBY0MsYUFBZCxDQUE0QlgsQ0FBQyxDQUFDVSxXQUE5QixDQUFQO0FBQ0QsR0FMSSxFQU1KRSxHQU5JLENBTUEsVUFBQ0MsTUFBRCxFQUFZO0FBQUE7O0FBQ2YsUUFBSUMsU0FBUyxtQ0FDUkQsTUFEUTtBQUVYRSxvQkFBYyxrQkFBV0YsTUFBTSxDQUFDRSxjQUFsQjtBQUZILE1BQWI7O0FBSUEsUUFBSUYsTUFBSixhQUFJQSxNQUFKLHdDQUFJQSxNQUFNLENBQUVHLEtBQVosa0RBQUksY0FBZXJCLE1BQW5CLEVBQTJCO0FBQUEsVUFDakJBLE1BRGlCLEdBQ05rQixNQUFNLENBQUNHLEtBREQsQ0FDakJyQixNQURpQjtBQUV6QixVQUFNc0IsS0FBSyxHQUFHdEIsTUFBTSxDQUFDdUIsS0FBUCxDQUFhLGNBQWIsQ0FBZDs7QUFDQSxVQUFJRCxLQUFKLGFBQUlBLEtBQUosdUJBQUlBLEtBQUssQ0FBRyxDQUFILENBQVQsRUFBZ0I7QUFDZEgsaUJBQVMsbUNBQVFBLFNBQVI7QUFBbUJLLHdCQUFjLEVBQUVGLEtBQUssQ0FBQyxDQUFEO0FBQXhDLFVBQVQ7QUFDQSxlQUFPSCxTQUFQO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPQSxTQUFQO0FBQ0QsR0FwQkksQ0FBUDtBQXFCRDs7QUFFRCxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQwQixNQUVsQkMsS0FGa0IsR0FFUkYsTUFBTSxDQUFDRyxLQUZDLENBRWxCRCxLQUZrQjtBQUcxQixNQUFNRSxTQUFTLEdBQUdwQyxJQUFJLENBQUNrQyxLQUFELENBQXRCO0FBQ0EsTUFBTTlCLFFBQVEsR0FBRyxDQUFBZ0MsU0FBUyxTQUFULElBQUFBLFNBQVMsV0FBVCxtQ0FBQUEsU0FBUyxDQUFFaEMsUUFBWCw0RUFBcUJhLE1BQXJCLElBQ2JkLFlBQVksQ0FBQ2lDLFNBQVMsQ0FBQ2hDLFFBQVgsQ0FEQyxHQUViLEVBRko7O0FBSjBCLGtCQU9GaUMsc0RBQVEsQ0FBQyxFQUFELENBUE47QUFBQSxNQU9uQkMsSUFQbUI7QUFBQSxNQU9iQyxPQVBhOztBQVMxQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsU0FERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvTUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNvQkMseURBQUssV0FBSXhDLFFBQUosb0JBQXNCa0MsU0FBUyxDQUFDTyxFQUFoQyxFQUR6Qjs7QUFBQTtBQUNRQyxtQkFEUjtBQUFBO0FBQUEsdUJBRTRCQSxHQUFHLENBQUNDLElBQUosRUFGNUI7O0FBQUE7QUFFUUMsMkJBRlI7QUFBQSxpREFHU0EsV0FIVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFBQSxhQU1DQyxnQkFORDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyTUFNZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNvQkwseURBQUssV0FBSXhDLFFBQUosb0JBQXNCa0MsU0FBUyxDQUFDTyxFQUFoQyxtQkFEekI7O0FBQUE7QUFDUUMsbUJBRFI7QUFBQTtBQUFBLHVCQUVtQ0EsR0FBRyxDQUFDQyxJQUFKLEVBRm5DOztBQUFBO0FBRVFHLGtDQUZSO0FBQUEsa0RBR1NBLGtCQUhUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTmM7QUFBQTtBQUFBOztBQUFBLGFBV0NDLE9BWEQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsa01BV2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDd0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQUNWLFNBQVMsRUFBVixFQUFjTSxnQkFBZ0IsRUFBOUIsQ0FBWixDQUR4Qjs7QUFBQTtBQUNRSyx1QkFEUjtBQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ01qQyw0QkFOUixHQU11QkQsZ0JBQWdCLENBQUNrQyxPQUFPLENBQUMsQ0FBRCxDQUFSLENBTnZDO0FBUVFDLHVCQVJSLG1DQVNPRCxPQUFPLENBQUMsQ0FBRCxDQVRkO0FBVUlqQyw4QkFBWSxFQUFaQTtBQVZKO0FBWUVvQix1QkFBTyxDQUFDYyxPQUFELENBQVA7O0FBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FYYztBQUFBO0FBQUE7O0FBeUJkLFFBQUlqQixTQUFKLGFBQUlBLFNBQUosdUJBQUlBLFNBQVMsQ0FBRU8sRUFBZixFQUFtQk0sT0FBTztBQUMzQixHQTFCUSxFQTBCTixDQUFDYixTQUFELENBMUJNLENBQVQ7QUEyQkEsTUFBSSxFQUFDRSxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRW5CLFlBQVAsQ0FBSixFQUF5QixPQUFPLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBRXpCLE1BQU1tQyxpQkFBaUIsR0FBR3hDLG9CQUFvQixDQUFDVixRQUFELENBQTlDO0FBQ0EsTUFBTW1ELFdBQVcsR0FBR0MsMkRBQWtCLENBQ3BDRixpQkFBaUIsQ0FBQ3ZDLEtBRGtCLEVBRXBDdUMsaUJBQWlCLENBQUN0QyxHQUZrQixDQUF0QztBQUlBLFNBQ0U7QUFBQSx1Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQVEsU0FBSyxFQUFFc0IsSUFBSSxDQUFDbUIsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxRQUFJLEVBQUVuQixJQUFJLENBQUNYLEtBQUwsQ0FBVytCLElBQXBCO0FBQUEsdUNBQW9DLFVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFLRSxNQUFDLHVFQUFEO0FBQ0UsWUFBUSxFQUFFcEIsSUFBSSxDQUFDcUIsWUFEakI7QUFFRSxRQUFJLEVBQUVyQixJQUFJLENBQUNzQixlQUZiO0FBR0UsZ0JBQVksRUFBQyxRQUhmO0FBSUUsWUFBUSxFQUFDLE1BSlg7QUFLRSxXQUFPLE1BTFQ7QUFNRSxTQUFLLEVBQUUsRUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFhRyxDQUFBeEQsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVhLE1BQVYsS0FBb0JzQyxXQUFwQixJQUNDO0FBQUEsdUNBQWUsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFLE1BQUMsZ0ZBQUQ7QUFDRSxZQUFRLEVBQUVuRCxRQURaO0FBRUUsZUFBVyxFQUFFa0MsSUFBSSxDQUFDbkIsWUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBZEosRUFzQkU7QUFBQSx1Q0FBZSxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRSxNQUFDLCtFQUFEO0FBQWlCLGVBQVcsRUFBRW1CLElBQUksQ0FBQ25CLFlBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQXRCRixFQTBCRyxDQUFBZixRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRWEsTUFBVixLQUFvQixDQUFDc0MsV0FBckIsSUFDQztBQUFBLHVDQUFlLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRSxNQUFDLGdGQUFEO0FBQ0UsWUFBUSxFQUFFbkQsUUFEWjtBQUVFLGVBQVcsRUFBRWtDLElBQUksQ0FBQ25CLFlBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQTNCSjtBQUFBO0FBQUE7QUFBQSx3cFBBREY7QUErREQsQ0ExR0Q7O0dBQU1ZLGE7VUFDV0UscUQ7OztLQURYRixhO0FBNEdTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZ3JvdXBdL2V4dHJhbGlmZS41MzA4YmUyMGVjMmMwM2VjZDQ1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBUZWFtTWVtYmVyQ2FyZHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvdGVhbS1tZW1iZXItY2FyZHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvaGVhZGVyJztcclxuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvbG9hZGluZy1pY29uJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IFN0cmVhbWVyU2NoZWR1bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvc3RyZWFtZXItc2NoZWR1bGUnO1xyXG5pbXBvcnQgY2hlY2tJZkV2ZW50SXNMaXZlIGZyb20gJy4uLy4uL3NyYy91dGlscyc7XHJcblxyXG5jb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kYXRhLmpzb24nKTtcclxuXHJcbmNvbnN0IEFQSV9CQVNFID0gJ2h0dHBzOi8vd3d3LmV4dHJhLWxpZmUub3JnL2FwaSc7XHJcblxyXG5mdW5jdGlvbiBzb3J0U2NoZWR1bGUoc2NoZWR1bGUpIHtcclxuICByZXR1cm4gc2NoZWR1bGVcclxuICAgIC5maWx0ZXIoKHN0cmVhbSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoKSA8IG5ldyBEYXRlKHN0cmVhbS50aW1lRW5kKTtcclxuICAgIH0pXHJcbiAgICAuc29ydChcclxuICAgICAgKGEsIGIpID0+XHJcbiAgICAgICAgbmV3IERhdGUoYS50aW1lU3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIudGltZVN0YXJ0KS5nZXRUaW1lKClcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB7XHJcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzY2hlZHVsZVswXS50aW1lU3RhcnQpO1xyXG4gIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHNjaGVkdWxlW3NjaGVkdWxlLmxlbmd0aCAtIDFdLnRpbWVFbmQpO1xyXG4gIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydFBhcnRpY2lwYW50cyhwYXJ0aWNpcGFudHMpIHtcclxuICByZXR1cm4gcGFydGljaXBhbnRzXHJcbiAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYS5zdHJlYW1Jc0xpdmUgJiYgIWIuc3RyZWFtSXNMaXZlKSByZXR1cm4gLTE7XHJcbiAgICAgIGlmIChiLnN0cmVhbUlzTGl2ZSAmJiAhYS5zdHJlYW1Jc0xpdmUpIHJldHVybiAxO1xyXG4gICAgICByZXR1cm4gYS5kaXNwbGF5TmFtZS5sb2NhbGVDb21wYXJlKGIuZGlzcGxheU5hbWUpO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBsZXQgbmV3TWVtYmVyID0ge1xyXG4gICAgICAgIC4uLm1lbWJlcixcclxuICAgICAgICBhdmF0YXJJbWFnZVVSTDogYGh0dHBzOiR7bWVtYmVyLmF2YXRhckltYWdlVVJMfWAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChtZW1iZXI/LmxpbmtzPy5zdHJlYW0pIHtcclxuICAgICAgICBjb25zdCB7IHN0cmVhbSB9ID0gbWVtYmVyLmxpbmtzO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyZWFtLm1hdGNoKC9jaGFubmVsPSguKikvKTtcclxuICAgICAgICBpZiAocmVnZXg/LlsxXSkge1xyXG4gICAgICAgICAgbmV3TWVtYmVyID0geyAuLi5uZXdNZW1iZXIsIHR3aXRjaFVzZXJuYW1lOiByZWdleFsxXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBFeHRyYUxpZmVUZWFtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZ3JvdXAgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBncm91cERhdGEgPSBkYXRhW2dyb3VwXTtcclxuICBjb25zdCBzY2hlZHVsZSA9IGdyb3VwRGF0YT8uc2NoZWR1bGU/Lmxlbmd0aFxyXG4gICAgPyBzb3J0U2NoZWR1bGUoZ3JvdXBEYXRhLnNjaGVkdWxlKVxyXG4gICAgOiBbXTtcclxuICBjb25zdCBbdGVhbSwgc2V0VGVhbV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRlYW0oKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH1gKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gZmV0Y2hlZFRlYW07XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRlYW1NZW1iZXJzKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9L3BhcnRpY2lwYW50c2ApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbU1lbWJlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gZmV0Y2hlZFRlYW1NZW1iZXJzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtmZXRjaFRlYW0oKSwgZmV0Y2hUZWFtTWVtYmVycygpXSk7XHJcbiAgICAgIC8vISBURVNUXHJcbiAgICAgIC8vIFRPRE8gUkVNT1ZFIFRISVNcclxuICAgICAgLy8gcmVzdWx0c1sxXVsxMV0uc3RyZWFtSXNMaXZlID0gdHJ1ZTtcclxuICAgICAgLy8hXHJcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IHNvcnRQYXJ0aWNpcGFudHMocmVzdWx0c1sxXSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdUZWFtID0ge1xyXG4gICAgICAgIC4uLnJlc3VsdHNbMF0sXHJcbiAgICAgICAgcGFydGljaXBhbnRzLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRUZWFtKG5ld1RlYW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGdyb3VwRGF0YT8uaWQpIGdldERhdGEoKTtcclxuICB9LCBbZ3JvdXBEYXRhXSk7XHJcbiAgaWYgKCF0ZWFtPy5wYXJ0aWNpcGFudHMpIHJldHVybiA8TG9hZGluZ0ljb24gLz47XHJcblxyXG4gIGNvbnN0IHNjaGVkdWxlVGltZVJhbmdlID0gZ2V0U2NoZWR1bGVUaW1lUmFuZ2Uoc2NoZWR1bGUpO1xyXG4gIGNvbnN0IGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgc2NoZWR1bGVUaW1lUmFuZ2Uuc3RhcnQsXHJcbiAgICBzY2hlZHVsZVRpbWVSYW5nZS5lbmRcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgPEhlYWRlciB0aXRsZT17dGVhbS5uYW1lfSAvPlxyXG4gICAgICA8YSBocmVmPXt0ZWFtLmxpbmtzLnBhZ2V9IGNsYXNzTmFtZT1cInRlYW1MaW5rXCI+XHJcbiAgICAgICAgSm9pbiBUZWFtXHJcbiAgICAgIDwvYT5cclxuICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgcHJvZ3Jlc3M9e3RlYW0uc3VtRG9uYXRpb25zfVxyXG4gICAgICAgIGdvYWw9e3RlYW0uZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgIHByb2dyZXNzVGV4dD1cIlJhaXNlZFwiXHJcbiAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICBpc01vbmV5XHJcbiAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAvPlxyXG4gICAgICB7c2NoZWR1bGU/Lmxlbmd0aCAmJiBpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIGxpdmVcIj5cclxuICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgIDxTdHJlYW1lclNjaGVkdWxlXHJcbiAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtTWVtYmVyc1wiPlxyXG4gICAgICAgIDxoMj5UZWFtIE1lbWJlcnM8L2gyPlxyXG4gICAgICAgIDxUZWFtTWVtYmVyQ2FyZHMgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NjaGVkdWxlPy5sZW5ndGggJiYgIWlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmVhbWVyU2NoZWR1bGUgdXBjb21pbmdcIj5cclxuICAgICAgICAgIDxoMj5VcGNvbWluZyBFdmVudDwvaDI+XHJcbiAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICBzY2hlZHVsZT17c2NoZWR1bGV9XHJcbiAgICAgICAgICAgIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0ODBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMsXHJcbiAgICAgICAgICAuc3RlYW1lclNjaGVkdWxlIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTWVtYmVycyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0cmFMaWZlVGVhbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==