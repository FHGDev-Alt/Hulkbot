module.exports = (bot, member) => {
   let guildids = ["318532861638737931", "264445053596991498",  "110373943822540800"],
   donowelcome = ["318532861638737931", "349661783612719119", "473256784954392608"],
   autoroles = {
      "ifrole": "439514265250955275",
      "ifbotrole": "440342710914646028",
      "robloxlovers": "428953426840256513",
      "learning": "434070145397161986",
      "fhgrole": "360975611638054922",
      "fhgbotrole": "360976747111645194",
      "rdbotrole": "419167874033123338",
      "rlbotrole": "431520359494189057"
   },
   autoroleguilds = {
     "if": "439513692162490370",
     "rl": "426909155832365066",
     "rd": "419160188541599744",
     "fhg": "358279862324166659"
   }
   
   if(donowelcome.includes(member.guild.id)) {
      return;
   } else {     
   if (guildids.includes(member.guild.id)) {
      return;
   } else {
   // SOON: member.send(`Welcome to ${member.guild.name}, ${member.displayName}!`);
   const channel = member.guild.channels.find('name', 'welcome');
   if (!channel) return;
      if (!member.displayName) {
         channel.send(`Welcome to ${member.guild.name}, ${member.user.username}!`);
         console.log(`${member.user.username} just joined ${member.guild.name}`);
      } else {
         channel.send(`Welcome to ${member.guild.name}, ${member.displayName}!`); 
         console.log(`${member.displayName} just joined ${member.guild.name}`);
      }
   }
   
   if (member.guild.id == autoroleguilds.rl) {
      if (member.user.bot) {
         member.addRole(autoroles.rlbotrole)
      }
         member.addRole(autoroles.robloxlovers)
   } else {
      if (member.guild.id == autoroleguilds.rd) {
         if (member.user.bot) {
            member.addRole(autoroles.rdbotrole)
         }
         member.addRole(autoroles.learning)
      } else {
         if (member.guild.id == autoroleguilds.fhg) {
            if (member.user.bot) {
               member.addRole(autoroles.fhgbotrole)
            }
            member.addRole(autoroles.fhgrole)
         } else {
            if (member.guild.id == autoroleguilds.if) {
               if (member.user.bot) {
                  member.addRole(autoroles.ifbotrole)
               }
               setTimeout(() => {
                  member.addRole(autoroles.ifrole)
               }, 300000)
            }
         }
      }
   }
  } 
}
