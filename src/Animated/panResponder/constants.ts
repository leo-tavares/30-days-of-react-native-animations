import {PixelRatio, Dimensions} from 'react-native';

export const BOX = {
  width: PixelRatio.getPixelSizeForLayoutSize(45),
  height: PixelRatio.getPixelSizeForLayoutSize(45),
};

const device = Dimensions.get('window');

const offSet = 8;
const halfDeviceDimensions = {
  width: device.width / 2,
  height: device.height / 2,
};

const boxMoveHorizontalLimit =
  halfDeviceDimensions.width - BOX.width / 2 - offSet;

const boxMoveVerticalLimit =
  halfDeviceDimensions.height - BOX.height / 2 - offSet;

export const boxMoveLimit = {
  top: -boxMoveVerticalLimit,
  bottom: boxMoveVerticalLimit,
  right: boxMoveHorizontalLimit,
  left: -boxMoveHorizontalLimit,
};
