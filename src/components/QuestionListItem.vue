<template>
  <v-expansion-panel :readonly="!canExpand">
    <v-expansion-panel-header>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="question.issuer.avatarUrl"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{question.issuer.username}} <span class="overline">{{formatDate(new Date(question.issueAt))}}</span>
          </v-list-item-title>
          <v-list-item-subtitle v-if="!userIsIssuer || !isModifying">{{question.text}}</v-list-item-subtitle>
          <v-list-item-subtitle v-else-if="userIsIssuer">
            <v-text-field
                color="orange"
                v-model="questionText"
            >
            </v-text-field>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action v-if="userIsOwner">
          <v-btn
              @click="deleteQuestion(question.uuid)"
              icon
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-list-item-action>

        <v-list-item-action v-else-if="userIsIssuer">
          <v-row v-if="!isModifying">

            <v-btn
                @click="isModifying = true"
                icon
            >
              <v-icon>{{icons.mdiPencil}}</v-icon>
            </v-btn>

            <v-btn
                @click="deleteQuestion(question.uuid)"
                icon
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-row>
          <v-row v-else>
            <v-btn
                @click="commitText(questionText)"
                icon
            >
              <v-icon>check</v-icon>
            </v-btn>
            <v-btn
                @click="isModifying = false"
                icon
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-row>
        </v-list-item-action>
      </v-list-item>

      <template v-if="canExpand" v-slot:actions>
        <v-icon>{{icons.mdiChevronDown}}</v-icon>
      </template>


    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card-actions v-if="isModifying && userIsOwner">
        <v-text-field
            color="orange"
            prefix="我来回答:"
            v-model="answer"
        >
        </v-text-field>
        <v-spacer></v-spacer>
        <v-btn @click="commitAnswer(answer)" icon>
          <v-icon>check</v-icon>
        </v-btn>
        <v-btn @click="isModifying = false" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-actions>
      <v-list-item v-else>
        <v-list-item-avatar>
          <v-img :src="teacherAvatarUrl"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{teacherName}} <span class="overline">{{formatDate(new Date(question.answerAt))}} </span>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{answer}}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action v-if="userIsOwner">
          <v-btn @click="isModifying = true" icon>
            <v-icon>{{icons.mdiPencil}}</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-expansion-panel-content>
  </v-expansion-panel>

</template>

<script>

  import {mdiChatProcessing, mdiChevronDown, mdiPencil} from '@mdi/js';
  import {ACCOUNT_NAMESPACE, VIDEO_PLAY_NAMESPACE} from '@/global';
  import {mapActions, mapGetters, mapState} from 'vuex';

  export default {
    name: 'QuestionListItem',
    props: {
      question: {
        type: Object,
        required: true
      },
    },
    methods: {
      ...mapActions(VIDEO_PLAY_NAMESPACE, [
        'modifyQuestionText',
        'deleteQuestion',
        'answerQuestion'
      ]),
      formatDate(date) {
        return `${date.getFullYear()}/${((date.getMonth() + 1) + '').padStart(2, '0')}/${(date.getDate() + '').padStart(2, '0')} ${(date.getHours() + '').padStart(2, '0')}:${(date.getMinutes() + '').padStart(2, '0')}:${(date.getSeconds() + '').padStart(2, '0')}`;
      },
      commitText(text) {
        const {uuid} = this.question;
        this.modifyQuestionText({uuid, text});
        this.isModifying = false;
      },
      commitAnswer(answer) {
        const {uuid} = this.question;
        this.answerQuestion({uuid, answer});
        this.isModifying = false;
      }
    },
    data() {
      const questionText = this.question.text;
      const answer = this.question.answer;
      return {
        icons: {
          mdiChevronDown,
          mdiPencil,
          mdiChatProcessing
        },
        isModifying: false,
        questionText,
        answer
      };
    },

    computed: {
      ...mapGetters(VIDEO_PLAY_NAMESPACE, [
        'userIsOwner', 'teacherName', 'teacherAvatarUrl'
      ]),
      ...mapState(ACCOUNT_NAMESPACE, {
        userUUID: 'uuid'
      }),
      hasAnswer() {
        return !!this.question.answer;
      },
      canExpand() {
        return this.hasAnswer || this.userIsOwner;
      },
      userIsIssuer() {
        return this.userUUID === this.question.issuer.uuid;
      },
    }

  };
</script>

<style scoped>

</style>