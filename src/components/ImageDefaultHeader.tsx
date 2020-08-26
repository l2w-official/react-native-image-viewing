/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";
import { Icon } from 'react-native-elements';
import { SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { TextRegular } from './Text';
import { Dimensions } from "../@types";

type Props = {
  title?: string,
  layout: Dimensions,
  onRequestClose: () => void;
};

const HIT_SLOP = { top: 16, left: 16, bottom: 16, right: 16 };

const ImageDefaultHeader = ({ onRequestClose, layout, title }: Props) => (
  <SafeAreaView style={styles.root}>
    <TouchableOpacity
      style={styles.closeButton}
      onPress={onRequestClose}
      hitSlop={HIT_SLOP}
    >
      <Icon style={styles.closeText} name="keyboard-arrow-left" color="white" />
    </TouchableOpacity>
    {
      !!(layout.height > layout.width && title) ? (
        <TextRegular level={'t2'} style={styles.title}>
          { title }
        </TextRegular>
      ) : null
    }
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    flex: 1,
  },
  title: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: 64,
  },
  closeButton: {
    marginRight: 8,
    marginTop: 8,
    width: 45,
    zIndex: 3,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22.5,
    backgroundColor: '#00000077',
  },
  closeText: {
    lineHeight: 25,
    fontSize: 25,
    paddingTop: 2,
    textAlign: 'left',
    color: '#FFF',
    includeFontPadding: false,
  },
});

export default ImageDefaultHeader;
