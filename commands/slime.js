const settings = require('../settings.json');
exports.run =  function(client, message, args){
	if (message.channel.id == settings.chn_welcome_mat)
		{
			message.member.addRole(settings.role_slime);
			message.delete();
		}
}