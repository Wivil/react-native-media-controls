import React, {ReactElement} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ViewStyle,
} from 'react-native';
import RNSlider from 'react-native-slider';
import styles from './MediaControls.style';
import {humanizeVideoDuration} from './utils';
import {Props as MediaControlsProps} from './MediaControls';
import {PLAYER_STATES} from './constants/playerStates';

export type CustomSliderStyle = {
  containerStyle?: ViewStyle;
  trackStyle?: ViewStyle;
  thumbStyle?: ViewStyle;
};

type Props = Pick<
  MediaControlsProps,
  | 'progress'
  | 'duration'
  | 'onFullScreen'
  | 'playerState'
  | 'onSeek'
  | 'onSeeking'
> & {
  onPause: () => void;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  customSliderStyle?: CustomSliderStyle;
};

const Slider = (props: Props): ReactElement => {
  const {
    customSliderStyle,
    duration,
    onFullScreen,
    onPause,
    progress,
    minimumTrackTintColor,
    maximumTrackTintColor,
  } = props;

  const containerStyle = customSliderStyle?.containerStyle || {};
  const customTrackStyle = customSliderStyle?.trackStyle || {};
  const customThumbStyle = customSliderStyle?.thumbStyle || {};

  const dragging = (value: number) => {
    const {onSeeking, playerState} = props;
    onSeeking(value);

    if (playerState === PLAYER_STATES.PAUSED) {
      return;
    }

    onPause();
  };

  const seekVideo = (value: number) => {
    props.onSeek(value);
    onPause();
  };

  return (
    <View
      style={[
        styles.controlsRow,
        styles.progressContainer,
        containerStyle,
      ]}
    >
      <View style={styles.progressColumnContainer}>
        <View style={[styles.timerLabelsContainer]}>
          <Text style={styles.timerLabel}>
            {humanizeVideoDuration(progress)}
          </Text>
          <Text style={styles.timerLabel}>
            {humanizeVideoDuration(duration)}
          </Text>
        </View>
        <RNSlider
          style={[styles.progressSlider]}
          onValueChange={dragging}
          onSlidingComplete={seekVideo}
          maximumValue={Math.floor(duration)}
          value={Math.floor(progress)}
          trackStyle={[styles.track, customTrackStyle]}
          thumbStyle={[styles.thumb, customThumbStyle]}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={maximumTrackTintColor}
        />
      </View>
      {Boolean(onFullScreen) && (
        <TouchableOpacity
          style={styles.fullScreenContainer}
          onPress={onFullScreen}
        >
          <Image source={require('./assets/ic_fullscreen.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export {Slider};
