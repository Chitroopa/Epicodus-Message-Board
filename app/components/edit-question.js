import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestionFormShow() {
      this.set('editQuestion', true);
    },
    deleteQuestion1(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion2', question);
      }
    },
    updateQuestion1(question) {
      if (this.get('content') !== undefined)
      {
        var params = {
          title: this.get('title'),
          content: this.get('content'),
          author: this.get('author'),
          notes: this.get('notes'),
          shortContent : (this.get('content').slice(0, 100)).concat("..."),
        }
      }
      else
      {
        var params = {
          title: this.get('title'),
          content: this.get('content'),
          author: this.get('author'),
          notes: this.get('notes'),
          shortContent : this.get('content'),
        }
      }
      
      this.set('editQuestion', false);
      this.sendAction('updateQuestion2', question, params);

      this.set('title', '');
      this.set('content', '');
      this.set('author', '');
      this.set('notes', '');
    }
  }
});
