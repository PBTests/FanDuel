import React from "react";
import { mount } from "enzyme";
import PlayerList from "./index.js";
import { mockPlayers, mockTeams } from "./playerList.mock.js";

it("Renders properly on loading state", function() {
  const props = {
    playersSearch: { isLoaded: false, isLoading: true }
  };
  const mountWrapper = mount(<PlayerList {...props} />);
  expect(mountWrapper.find("h2").text()).toBe("Loading players...");
});

it("Renders properly on error state", function() {
  const props = {
    playersSearch: { isLoaded: true, isError: true }
  };
  const mountWrapper = mount(<PlayerList {...props} />);
  expect(mountWrapper.find("h2").text()).toBe(
    "There was a problem loading players"
  );
});

it("Renders properly on no-players found state", function() {
  const props = {
    playersSearch: { isLoaded: true, players: [] }
  };
  const mountWrapper = mount(<PlayerList {...props} />);
  expect(mountWrapper.find("h2").text()).toBe("No players could be found");
});

it("Renders properly with mock results data-set", function() {
  const props = {
    playersSearch: {
      players: mockPlayers,
      isLoaded: true,
      isLoading: false
    },
    teams: mockTeams,
    showSelectionModal: jest.fn()
  };
  const mountWrapper = mount(<PlayerList {...props} />);
  expect(mountWrapper.find("h2").text()).toBe("Players");
});
