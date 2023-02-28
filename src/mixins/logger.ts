import { Vue, Component } from 'vue-property-decorator';
import { LogMessage, MessageType } from '../abstracts/common';

@Component
export default class LoggerMixin  extends Vue {
    logger({ type, message }: LogMessage) {
        if (type === MessageType.success) {
            this.successMessage(message);
        }

        if (type === MessageType.failed) {
            this.failureMessage(message);
        }
    }

    successMessage(message: string) {
        console.log('SUCCESS! ', message);
    }

    failureMessage(message: string) {
        console.log('FAILED! ', message);
    }
}