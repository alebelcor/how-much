'use strict';

module.exports = function (response) {
  return JSON.parse(response.body);
};
