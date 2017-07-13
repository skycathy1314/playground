/**
 * Created by Cassie.Xu on 17/7/12.
 */
module.exports = {
  path: 'timerBar',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/TimerBar'))
    })
  }
}