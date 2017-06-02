import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  answer: DS.attr(),
  created: DS.attr({
    defaultValue(){
    return new Date();
    }
  }),
  question: DS.belongsTo('question', { aync: true })
});
