import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAnswerFormShow() {
      this.set('editAnswer', true)
    },
    updateAnswer1(answerForQuestion) {
      var params = {
        // answer: this.get('answer'),
        answer: $('#edit-answer').val(),
        author: this.get('author'),
        question: this.get('question')
      }
      this.set('editAnswer', false);
      this.sendAction('updateAnswer2', answerForQuestion, params);
    },
    deleteAnswer1(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('deleteAnswer2', answer);
      }
    }
  }
});
