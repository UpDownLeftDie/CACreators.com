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
  return schedule.sort(function (a, b) {
    return new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime();
  });
}

function getScheduleTimeRange(schedule) {
  var start = new Date(schedule[0].timeStart);
  var end = new Date(schedule[schedule.length - 1].timeEnd);
  return [start, end];
}

function checkIfEventIsLive(schedule) {
  var scheduleTimeRange = getScheduleTimeRange(schedule);
  console.log({
    scheduleTimeRange: scheduleTimeRange
  }, typeof scheduleTimeRange.start);
  var now = new Date();
  console.log({
    now: now
  });
  console.log(scheduleTimeRange.start < now.getTime());
  console.log(now < scheduleTimeRange.end);
  return scheduleTimeRange.start < now && now < scheduleTimeRange.end;
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
      lineNumber: 97,
      columnNumber: 35
    }
  });
  var isEventLive = checkIfEventIsLive(schedule);
  return __jsx("div", {
    className: "jsx-492432550" + " " + "page",
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
    className: "jsx-492432550" + " " + "teamLink",
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
  }), (schedule === null || schedule === void 0 ? void 0 : schedule.length) && isEventLive && __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }), __jsx(_components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_7__["default"], {
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }), (schedule === null || schedule === void 0 ? void 0 : schedule.length) && !isEventLive && __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "492432550",
    __self: _this
  }, ".page.jsx-492432550{width:100%;display:grid;justify-items:center;min-width:480px;}.teamLink.jsx-492432550{color:#fff;font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUhTLEFBR3dCLEFBTUEsV0FMRSxBQU1FLGFBTE0sRUFNdkIsbUJBTGtCLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXHBhZ2VzXFxbZ3JvdXBdXFxleHRyYWxpZmUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBUZWFtTWVtYmVyQ2FyZHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvdGVhbS1tZW1iZXItY2FyZHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvaGVhZGVyJztcclxuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvbG9hZGluZy1pY29uJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IFN0cmVhbWVyU2NoZWR1bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvc3RyZWFtZXItc2NoZWR1bGUnO1xyXG5cclxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJyk7XHJcblxyXG5jb25zdCBBUElfQkFTRSA9ICdodHRwczovL3d3dy5leHRyYS1saWZlLm9yZy9hcGknO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlLnNvcnQoXHJcbiAgICAoYSwgYikgPT4gbmV3IERhdGUoYS50aW1lU3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIudGltZVN0YXJ0KS5nZXRUaW1lKClcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmRXZlbnRJc0xpdmUoc2NoZWR1bGUpIHtcclxuICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKTtcclxuICBjb25zb2xlLmxvZyh7IHNjaGVkdWxlVGltZVJhbmdlIH0sIHR5cGVvZiBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCk7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zb2xlLmxvZyh7IG5vdyB9KTtcclxuICBjb25zb2xlLmxvZyhzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCA8IG5vdy5nZXRUaW1lKCkpO1xyXG4gIGNvbnNvbGUubG9nKG5vdyA8IHNjaGVkdWxlVGltZVJhbmdlLmVuZCk7XHJcbiAgcmV0dXJuIHNjaGVkdWxlVGltZVJhbmdlLnN0YXJ0IDwgbm93ICYmIG5vdyA8IHNjaGVkdWxlVGltZVJhbmdlLmVuZDtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydFBhcnRpY2lwYW50cyhwYXJ0aWNpcGFudHMpIHtcclxuICByZXR1cm4gcGFydGljaXBhbnRzXHJcbiAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYS5zdHJlYW1Jc0xpdmUgJiYgIWIuc3RyZWFtSXNMaXZlKSByZXR1cm4gLTE7XHJcbiAgICAgIGlmIChiLnN0cmVhbUlzTGl2ZSAmJiAhYS5zdHJlYW1Jc0xpdmUpIHJldHVybiAxO1xyXG4gICAgICByZXR1cm4gYS5kaXNwbGF5TmFtZS5sb2NhbGVDb21wYXJlKGIuZGlzcGxheU5hbWUpO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBsZXQgbmV3TWVtYmVyID0ge1xyXG4gICAgICAgIC4uLm1lbWJlcixcclxuICAgICAgICBhdmF0YXJJbWFnZVVSTDogYGh0dHBzOiR7bWVtYmVyLmF2YXRhckltYWdlVVJMfWAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChtZW1iZXI/LmxpbmtzPy5zdHJlYW0pIHtcclxuICAgICAgICBjb25zdCB7IHN0cmVhbSB9ID0gbWVtYmVyLmxpbmtzO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyZWFtLm1hdGNoKC9jaGFubmVsPSguKikvKTtcclxuICAgICAgICBpZiAocmVnZXg/LlsxXSkge1xyXG4gICAgICAgICAgbmV3TWVtYmVyID0geyAuLi5uZXdNZW1iZXIsIHR3aXRjaFVzZXJuYW1lOiByZWdleFsxXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBFeHRyYUxpZmVUZWFtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZ3JvdXAgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBncm91cERhdGEgPSBkYXRhW2dyb3VwXTtcclxuICBjb25zdCBzY2hlZHVsZSA9IGdyb3VwRGF0YT8uc2NoZWR1bGU/Lmxlbmd0aFxyXG4gICAgPyBzb3J0U2NoZWR1bGUoZ3JvdXBEYXRhLnNjaGVkdWxlKVxyXG4gICAgOiBbXTtcclxuICBjb25zdCBbdGVhbSwgc2V0VGVhbV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRlYW0oKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH1gKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gZmV0Y2hlZFRlYW07XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRlYW1NZW1iZXJzKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9L3BhcnRpY2lwYW50c2ApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbU1lbWJlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gZmV0Y2hlZFRlYW1NZW1iZXJzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtmZXRjaFRlYW0oKSwgZmV0Y2hUZWFtTWVtYmVycygpXSk7XHJcbiAgICAgIC8vISBURVNUXHJcbiAgICAgIC8vIFRPRE8gUkVNT1ZFIFRISVNcclxuICAgICAgLy8gcmVzdWx0c1sxXVsxMV0uc3RyZWFtSXNMaXZlID0gdHJ1ZTtcclxuICAgICAgLy8hXHJcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IHNvcnRQYXJ0aWNpcGFudHMocmVzdWx0c1sxXSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdUZWFtID0ge1xyXG4gICAgICAgIC4uLnJlc3VsdHNbMF0sXHJcbiAgICAgICAgcGFydGljaXBhbnRzLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRUZWFtKG5ld1RlYW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGdyb3VwRGF0YT8uaWQpIGdldERhdGEoKTtcclxuICB9LCBbZ3JvdXBEYXRhXSk7XHJcbiAgaWYgKCF0ZWFtPy5wYXJ0aWNpcGFudHMpIHJldHVybiA8TG9hZGluZ0ljb24gLz47XHJcblxyXG4gIGNvbnN0IGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKHNjaGVkdWxlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgIDxIZWFkZXIgdGl0bGU9e3RlYW0ubmFtZX0gLz5cclxuICAgICAgPGEgaHJlZj17dGVhbS5saW5rcy5wYWdlfSBjbGFzc05hbWU9XCJ0ZWFtTGlua1wiPlxyXG4gICAgICAgIEpvaW4gVGVhbVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgIHByb2dyZXNzPXt0ZWFtLnN1bURvbmF0aW9uc31cclxuICAgICAgICBnb2FsPXt0ZWFtLmZ1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgIGdvYWxUZXh0PVwiR29hbFwiXHJcbiAgICAgICAgaXNNb25leVxyXG4gICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgLz5cclxuICAgICAge3NjaGVkdWxlPy5sZW5ndGggJiYgaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgIDxTdHJlYW1lclNjaGVkdWxlIHNjaGVkdWxlPXtzY2hlZHVsZX0gdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8VGVhbU1lbWJlckNhcmRzIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAge3NjaGVkdWxlPy5sZW5ndGggJiYgIWlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZSBzY2hlZHVsZT17c2NoZWR1bGV9IHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgKX1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQ4MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW1MaW5rIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwiQVBJX0JBU0UiLCJzb3J0U2NoZWR1bGUiLCJzY2hlZHVsZSIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJ0aW1lU3RhcnQiLCJnZXRUaW1lIiwiZ2V0U2NoZWR1bGVUaW1lUmFuZ2UiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsInRpbWVFbmQiLCJjaGVja0lmRXZlbnRJc0xpdmUiLCJzY2hlZHVsZVRpbWVSYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJub3ciLCJzb3J0UGFydGljaXBhbnRzIiwicGFydGljaXBhbnRzIiwic3RyZWFtSXNMaXZlIiwiZGlzcGxheU5hbWUiLCJsb2NhbGVDb21wYXJlIiwibWFwIiwibWVtYmVyIiwibmV3TWVtYmVyIiwiYXZhdGFySW1hZ2VVUkwiLCJsaW5rcyIsInN0cmVhbSIsInJlZ2V4IiwibWF0Y2giLCJ0d2l0Y2hVc2VybmFtZSIsIkV4dHJhTGlmZVRlYW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJncm91cCIsInF1ZXJ5IiwiZ3JvdXBEYXRhIiwidXNlU3RhdGUiLCJ0ZWFtIiwic2V0VGVhbSIsInVzZUVmZmVjdCIsImZldGNoVGVhbSIsImZldGNoIiwiaWQiLCJyZXMiLCJqc29uIiwiZmV0Y2hlZFRlYW0iLCJmZXRjaFRlYW1NZW1iZXJzIiwiZmV0Y2hlZFRlYW1NZW1iZXJzIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXN1bHRzIiwibmV3VGVhbSIsImlzRXZlbnRMaXZlIiwibmFtZSIsInBhZ2UiLCJzdW1Eb25hdGlvbnMiLCJmdW5kcmFpc2luZ0dvYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFP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RFhGLGE7QUE4RVNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLjk0MDM3YmNlNWU4OTMwM2VhNzRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFRlYW1NZW1iZXJDYXJkcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy90ZWFtLW1lbWJlci1jYXJkcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9oZWFkZXInO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9sb2FkaW5nLWljb24nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgU3RyZWFtZXJTY2hlZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9zdHJlYW1lci1zY2hlZHVsZSc7XHJcblxyXG5jb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kYXRhLmpzb24nKTtcclxuXHJcbmNvbnN0IEFQSV9CQVNFID0gJ2h0dHBzOi8vd3d3LmV4dHJhLWxpZmUub3JnL2FwaSc7XHJcblxyXG5mdW5jdGlvbiBzb3J0U2NoZWR1bGUoc2NoZWR1bGUpIHtcclxuICByZXR1cm4gc2NoZWR1bGUuc29ydChcclxuICAgIChhLCBiKSA9PiBuZXcgRGF0ZShhLnRpbWVTdGFydCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi50aW1lU3RhcnQpLmdldFRpbWUoKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB7XHJcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzY2hlZHVsZVswXS50aW1lU3RhcnQpO1xyXG4gIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHNjaGVkdWxlW3NjaGVkdWxlLmxlbmd0aCAtIDFdLnRpbWVFbmQpO1xyXG4gIHJldHVybiBbc3RhcnQsIGVuZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZFdmVudElzTGl2ZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHNjaGVkdWxlVGltZVJhbmdlID0gZ2V0U2NoZWR1bGVUaW1lUmFuZ2Uoc2NoZWR1bGUpO1xyXG4gIGNvbnNvbGUubG9nKHsgc2NoZWR1bGVUaW1lUmFuZ2UgfSwgdHlwZW9mIHNjaGVkdWxlVGltZVJhbmdlLnN0YXJ0KTtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnNvbGUubG9nKHsgbm93IH0pO1xyXG4gIGNvbnNvbGUubG9nKHNjaGVkdWxlVGltZVJhbmdlLnN0YXJ0IDwgbm93LmdldFRpbWUoKSk7XHJcbiAgY29uc29sZS5sb2cobm93IDwgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kKTtcclxuICByZXR1cm4gc2NoZWR1bGVUaW1lUmFuZ2Uuc3RhcnQgPCBub3cgJiYgbm93IDwgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0UGFydGljaXBhbnRzKHBhcnRpY2lwYW50cykge1xyXG4gIHJldHVybiBwYXJ0aWNpcGFudHNcclxuICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGlmIChhLnN0cmVhbUlzTGl2ZSAmJiAhYi5zdHJlYW1Jc0xpdmUpIHJldHVybiAtMTtcclxuICAgICAgaWYgKGIuc3RyZWFtSXNMaXZlICYmICFhLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIDE7XHJcbiAgICAgIHJldHVybiBhLmRpc3BsYXlOYW1lLmxvY2FsZUNvbXBhcmUoYi5kaXNwbGF5TmFtZSk7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgobWVtYmVyKSA9PiB7XHJcbiAgICAgIGxldCBuZXdNZW1iZXIgPSB7XHJcbiAgICAgICAgLi4ubWVtYmVyLFxyXG4gICAgICAgIGF2YXRhckltYWdlVVJMOiBgaHR0cHM6JHttZW1iZXIuYXZhdGFySW1hZ2VVUkx9YCxcclxuICAgICAgfTtcclxuICAgICAgaWYgKG1lbWJlcj8ubGlua3M/LnN0cmVhbSkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RyZWFtIH0gPSBtZW1iZXIubGlua3M7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBzdHJlYW0ubWF0Y2goL2NoYW5uZWw9KC4qKS8pO1xyXG4gICAgICAgIGlmIChyZWdleD8uWzFdKSB7XHJcbiAgICAgICAgICBuZXdNZW1iZXIgPSB7IC4uLm5ld01lbWJlciwgdHdpdGNoVXNlcm5hbWU6IHJlZ2V4WzFdIH07XHJcbiAgICAgICAgICByZXR1cm4gbmV3TWVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3TWVtYmVyO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IEV4dHJhTGlmZVRlYW0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBncm91cCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGdyb3VwRGF0YSA9IGRhdGFbZ3JvdXBdO1xyXG4gIGNvbnN0IHNjaGVkdWxlID0gZ3JvdXBEYXRhPy5zY2hlZHVsZT8ubGVuZ3RoXHJcbiAgICA/IHNvcnRTY2hlZHVsZShncm91cERhdGEuc2NoZWR1bGUpXHJcbiAgICA6IFtdO1xyXG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbSgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfWApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbU1lbWJlcnMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH0vcGFydGljaXBhbnRzYCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtTWVtYmVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbU1lbWJlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoVGVhbSgpLCBmZXRjaFRlYW1NZW1iZXJzKCldKTtcclxuICAgICAgLy8hIFRFU1RcclxuICAgICAgLy8gVE9ETyBSRU1PVkUgVEhJU1xyXG4gICAgICAvLyByZXN1bHRzWzFdWzExXS5zdHJlYW1Jc0xpdmUgPSB0cnVlO1xyXG4gICAgICAvLyFcclxuICAgICAgY29uc3QgcGFydGljaXBhbnRzID0gc29ydFBhcnRpY2lwYW50cyhyZXN1bHRzWzFdKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1RlYW0gPSB7XHJcbiAgICAgICAgLi4ucmVzdWx0c1swXSxcclxuICAgICAgICBwYXJ0aWNpcGFudHMsXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFRlYW0obmV3VGVhbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ3JvdXBEYXRhPy5pZCkgZ2V0RGF0YSgpO1xyXG4gIH0sIFtncm91cERhdGFdKTtcclxuICBpZiAoIXRlYW0/LnBhcnRpY2lwYW50cykgcmV0dXJuIDxMb2FkaW5nSWNvbiAvPjtcclxuXHJcbiAgY29uc3QgaXNFdmVudExpdmUgPSBjaGVja0lmRXZlbnRJc0xpdmUoc2NoZWR1bGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgPEhlYWRlciB0aXRsZT17dGVhbS5uYW1lfSAvPlxyXG4gICAgICA8YSBocmVmPXt0ZWFtLmxpbmtzLnBhZ2V9IGNsYXNzTmFtZT1cInRlYW1MaW5rXCI+XHJcbiAgICAgICAgSm9pbiBUZWFtXHJcbiAgICAgIDwvYT5cclxuICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgcHJvZ3Jlc3M9e3RlYW0uc3VtRG9uYXRpb25zfVxyXG4gICAgICAgIGdvYWw9e3RlYW0uZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgIHByb2dyZXNzVGV4dD1cIlJhaXNlZFwiXHJcbiAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICBpc01vbmV5XHJcbiAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAvPlxyXG4gICAgICB7c2NoZWR1bGU/Lmxlbmd0aCAmJiBpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGUgc2NoZWR1bGU9e3NjaGVkdWxlfSB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxUZWFtTWVtYmVyQ2FyZHMgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICB7c2NoZWR1bGU/Lmxlbmd0aCAmJiAhaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgIDxTdHJlYW1lclNjaGVkdWxlIHNjaGVkdWxlPXtzY2hlZHVsZX0gdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbUxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0cmFMaWZlVGVhbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==