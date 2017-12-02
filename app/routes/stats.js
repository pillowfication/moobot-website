import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return $.getJSON('http://moo.pf-n.co/stats').then(a => {
      const p = []
      for (const k in a) {
        p.push({k, v: a[k]})
      }
      return p
    })
  }
});
