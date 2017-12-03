import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
    triggerMoo() {
      let url = 'http://moo.pf-n.co/moo'
      $.post(url, (data) => {
      	console.log('moo\'d')
      })
    }
  }
});
