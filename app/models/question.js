import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  created: DS.attr({
    defaultValue(){
      return new Date();
    }
  }),
  // answers: DS.hasMany('answer', { async: true })
});
