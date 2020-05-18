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
          @change="setName"
          color="orange"
          label="标题"
          prepend-icon="text"
      >
      </v-text-field>
      <v-text-field
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
          color="orange"
          dark
          id="upload-btn"
          width="160"
          @click="createCourse"
      >上传
      </v-btn>
    </v-form>
  </v-row>
</template>

<script>
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';
  import CourseCard from '@/components/CourseCard';
  import {COURSE_UPLOAD_NAMESPACE} from '@/global';

  export default {
    name: 'CourseUploadPage',
    components: {
      CourseCard
    },
    computed: {
      ...mapState(COURSE_UPLOAD_NAMESPACE, [
        'name', 'introduction', 'picture', 'video', 'file'
      ]),
      ...mapGetters(COURSE_UPLOAD_NAMESPACE, [
        'pictureUrl',
      ]),
    },
    methods: {
      ...mapMutations(COURSE_UPLOAD_NAMESPACE, [
        'setName', 'setIntroduction', 'setPicture', 'setVideo', 'setFile'
      ]),
      ...mapActions(COURSE_UPLOAD_NAMESPACE, [
        'createCourse',
      ]),

    }
  };
</script>

<style scoped>
  #upload-btn {
    margin-left: 48px;
  }
</style>