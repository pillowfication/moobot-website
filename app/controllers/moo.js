import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
    triggerMoo() {
      let message = {message: this.get('message')}; 
      let url = 'http://moo.pf-n.co/moo'
      $.post(url, message, (data) => {
      	console.log('moo\'d')
      })
    }
  }
});
