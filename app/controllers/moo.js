import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
    triggerMoo() {
      let url = 'http://localhost:3000/moo'
      $.post(url, (data) => {
      	console.log('aye')
      })
    }
  }
});
