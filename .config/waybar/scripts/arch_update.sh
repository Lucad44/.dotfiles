#!/bin/bash

pacman_updates=`checkupdates | wc -l`
yay_updates=`yay -Qua | wc -l`

echo $((pacman_updates + yay_updates))


