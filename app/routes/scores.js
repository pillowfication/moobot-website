import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return $.getJSON('http://moo.pf-n.co/scores')
  }
})
