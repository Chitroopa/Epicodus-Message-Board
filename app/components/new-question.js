import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion1() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      console.log(params);
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params)
    }
  }
});