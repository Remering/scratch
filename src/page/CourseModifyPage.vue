<template>
  <v-row class="pa-2" justify="center">
    <CourseCard
        :image-url="pictureUrl"
        :introduction="introduction"
        :title="name"
    >
    </CourseCard>
    <v-form>
      <v-text-field
          :value="name"
          @change="setName"
          color="orange"
          label="标题"
          prepend-icon="text"
      >
      </v-text-field>
      <v-text-field
          :value="introduction"
          @change="setIntroduction"
          color="orange"
          label="简介"
          prepend-icon="text"
      >
      </v-text-field>
      <v-file-input
          :value="picture"
          @change="setPicture"
          accept="image/*"
          color="orange"
          label="封面"
      >

      </v-file-input>

      <v-file-input
          :value="video"
          @change="setVideo"
          accept="video/*"
          color="orange"
          label="视频"
      >
      </v-file-input>
      <v-file-input
          :value="file"
          @change="setFile"
          color="orange"
          label="课件"
      >
      </v-file-input>
      <v-btn
          @click="updateCourse"
          color="orange"
          dark
          id="upload-btn"
          width="160"
      >修改
      </v-btn>
    </v-form>
  </v-row>
</template>

<script>
  import {mapActions, mapMutations, mapState} from 'vuex';
  import store from '@/store';
  import CourseCard from '@/components/CourseCard';
  import {COURSE_MODIFY_NAMESPACE} from '@/global';

  export default {
    name: 'CourseUploadPage',
    components: {
      CourseCard
    },

    beforeRouteEnter(to, from, next) {
      const {courseUUID} = to.params;
      store.dispatch(`${COURSE_MODIFY_NAMESPACE}/updateUUID`, courseUUID).then((course) => {
        if (!course) {
          setTimeout(() => {
            store.dispatch(`${COURSE_MODIFY_NAMESPACE}/updateUUID`, courseUUID);
            const course = store.getters[`${COURSE_MODIFY_NAMESPACE}/course`];
            // eslint-disable-next-line no-console
            console.log(course);
            next();
          }, 500);
        } else next();
      });
    },


    computed: {
      ...mapState(COURSE_MODIFY_NAMESPACE, [
        'name', 'introduction', 'picture', 'video', 'file', 'pictureUrl'
      ]),

    },
    methods: {
      ...mapMutations(COURSE_MODIFY_NAMESPACE, [
        'setName', 'setIntroduction', 'setPicture', 'setVideo', 'setFile'
      ]),
      ...mapActions(COURSE_MODIFY_NAMESPACE, [
        'updateCourse'
      ])
    }
  };
</script>

<style scoped>
  #upload-btn {
    margin-left: 48px;
  }
</style>