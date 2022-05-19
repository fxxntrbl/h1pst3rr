import chalk from 'chalk';
import figlet from 'figlet';

import search from '../pitchfork';

class HipsterInstance {
    private API: any;
    constructor() {
        this.API = ''; // implemented as Apple Music or Spotify API class later
    }

    public run() {
        figlet.text('HIPST3RR', {
            font: 'Slant',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 84,
            whitespaceBreak: true
        }, (err: any, data: any) => {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log(chalk.bold('HIPST3RR v0.1a'));
            console.log(chalk.cyan('Scores your Apple Music history with Pitchfork'));

        });

        //search("My Beautiful Dark Twisted Fantasy", "Kanye West");

    }
}

export default HipsterInstance;