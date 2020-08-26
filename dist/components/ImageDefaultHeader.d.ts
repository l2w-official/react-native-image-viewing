/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import { Dimensions } from "../@types";
declare type Props = {
    title?: string;
    layout: Dimensions;
    onRequestClose: () => void;
};
declare const ImageDefaultHeader: ({ onRequestClose, layout, title }: Props) => JSX.Element;
export default ImageDefaultHeader;
