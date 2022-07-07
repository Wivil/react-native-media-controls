import {StyleSheet, Dimensions} from 'react-native';

const containerBackgroundColor = 'rgba(0, 0, 0, 0.2)';
const white = '#fff';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: containerBackgroundColor,
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 20,
    paddingVertical: 13,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  controlsRow: {
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  fullScreenContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  playButton: {
    alignItems: 'center',
    height: height * 0.08,
    justifyContent: 'center',
    width: width * 0.08,
    marginBottom: height * 0.05,
  },
  playIcon: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
  progressColumnContainer: {
    flex: 1,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressSlider: {
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  },
  replayIcon: {
    height: 20,
    resizeMode: 'stretch',
    width: 25,
  },
  thumb: {
    backgroundColor: white,
    height: 0,
    width: 0,
  },
  timeRow: {
    alignSelf: 'stretch',
  },
  timerLabel: {
    color: white,
    fontSize: 12,
  },
  timerLabelsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * -0.03,
  },
  toolbar: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  toolbarRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  track: {
    borderRadius: 1,
    height: 5,
  },
});
