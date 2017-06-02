import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question')
    //   posts: this.store.query('post',{
    //     orderByValue: 'created',
    //     limitToFirst: 5
    //   }),
    // }).then((test)=>{
    //     return test.toArray().reverse();
     })
      // comments: this.store.findAll('comment')
    // });
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
