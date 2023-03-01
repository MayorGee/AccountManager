import { Vue, Component } from 'vue-property-decorator';
import { MessageType } from '../abstracts/Enum';
import { LogMessage } from '../abstracts/Interface';

@Component
export default class LoggerMixin extends Vue {
    logger({ type, message }: LogMessage) {
        if (type === MessageType.success) {
            this.logSuccessMessage(message);
        }

        if (type === MessageType.failed) {
            this.logFailureMessage(message);
        }
    }

    logSuccessMessage(message: string) {
        console.log('SUCCESS! ', message);
    }

    logFailureMessage(message: string) {
        console.log('FAILED! ', message);
    }
}