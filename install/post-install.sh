#!/bin/bash
npm i -g polymer-cli bower
cd client
bower install
polymer build
