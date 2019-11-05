<template>
  <v-row class="pa-2" justify="center">
    <CourseCard :image-url="pictureUrl" :text="text" :title="name"></CourseCard>
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
      <v-btn
          color="orange"
          dark
          id="upload-btn"
          width="160"
      >上传
      </v-btn>
    </v-form>
  </v-row>
</template>

<script>
  import {mapGetters, mapMutations, mapState} from 'vuex';
  import {COURSE_UPLOAD_NAMESPACE} from '@/store';
  import CourseCard from '@/components/CourseCard';

  export default {
    name: 'CourseUploadPage',
    components: {
      CourseCard
    },
    computed: {
      ...mapState(COURSE_UPLOAD_NAMESPACE, [
        'name', 'introduction', 'picture', 'video',
      ]),
      ...mapGetters(COURSE_UPLOAD_NAMESPACE, [
        'pictureUrl',
      ]),
    },
    methods: {
      ...mapMutations(COURSE_UPLOAD_NAMESPACE, [
        'setName', 'setIntroduction', 'setPicture', 'setVideo'
      ]),
    }
  };
</script>

<style scoped>
  #upload-btn {
    margin-left: 48px;
  }
</style>