import Ember from 'ember';

export default Ember.Component.extend({
  checkOneBool: true,
  checkTwoBool: false,
  checkThreeBool: false,
  helpFormBool: false,
  actions: {
    hideCheckOne() {
      this.set('checkOneBool', false);
      this.set('checkTwoBool', true);
    },
    hideCheckTwo () {
      this.set('checkTwoBool', false);
      this.set('checkThreeBool', true);
    },
    hideCheckThree () {
      this.set('checkThreeBool', false);
      this.set('helpFormBool', true);
    },
    saveHelpRequest() {
      this.set('checkOneBool', true);
      this.set('helpFormBool', false);
    }
  }
});
