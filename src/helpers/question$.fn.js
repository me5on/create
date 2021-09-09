import {createInterface} from 'node:readline';
import {promisify} from 'node:util';


const question$ = (

    async options => {

        const {
            input = process.stdin,
            output = process.stdout,
            prompt, // eslint-disable-line no-shadow
            message = options,
            choices,
            loud,
        } = options;

        const completer = line => {
            const found = choices?.filter(c => c.startsWith(line));
            return [found?.length ? found : choices, line];
        };

        const rl = createInterface({input, output, prompt, completer});
        const q$ = promisify(rl.question).bind(rl);

        try {
            return {answer: await q$(message)};
        } catch (error) {
            if (loud) {
                throw error;
            }
            return {error};
        } finally {
            rl.close();
        }

    }

);


// noinspection JSUnusedGlobalSymbols
export default question$;
