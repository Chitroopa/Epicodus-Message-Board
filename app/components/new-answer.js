import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer1() {
      var regex = "/\n/g"
      var params = {
        answer: $('#answer').val(),
        // answer: this.get('answer'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer2', params);

      this.set('answer', '');
      this.set('author', '');
      this.set('question', '');
    }
  }
});
