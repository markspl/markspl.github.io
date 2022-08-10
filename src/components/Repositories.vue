<template>
  <div class="repositories">
    <div class="container">
      <div class="row justify-content-center fade">
        <h3 v-if="repos.length">Recently updated repositories</h3>
        <div class="d-flex justify-content-center" v-if="!repos.length">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
        <div class="col-lg col-md-12" v-for="item in repos" :key="item.id">
          <div class="card h-100">
            <div class="card-body">
              <h4 style="word-break: break-word;" class="card-title">{{ item.name }}</h4>
              <!-- eslint-disable max-len -->
              <h6 class="card-subtitle">Last push: {{ new Date(item.pushed_at).toLocaleDateString('fi-FI') }}</h6>
              <hr>
              <p class="card-text">{{ item.description }}</p>
              <a :href="item.html_url" target="_blank" class="stretched-link"></a>
            </div>
            <template v-if="item.topics.length">
              <div class="card-footer">
                <span class="badge rounded-pill" v-for="topic in item.topics" :key="topic">
                  {{ topic }}
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const sortByUpdated = (arr) => {
  // Sort by comparing element.pushed_at
  function sorter() {
    function sort(a, b) {
      if (a.pushed_at < b.pushed_at) return 1;
      if (a.pushed_at > b.pushed_at) return -1;
      return 0;
    }
    return sort;
  }

  // Return sorted array
  return (arr.sort(sorter()));
};

export default {
  data() {
    return {
      repos: [],
    };
  },
  mounted() {
    axios({
      method: 'get',
      url: 'https://api.github.com/users/markspl/repos',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      // Sort results by time
      const data = sortByUpdated(res.data);

      // Show 5 the most updated repository
      this.repos = data.slice(0, 5);
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(`Error: ${err}`);
    });
  },
};
</script>

<style>
[class*="col-"] {
  margin-bottom: 5px;
}

.repositories {
  margin-top: 2em;
}

div.repositories div.card-footer>span {
  margin-right: 0.2em;
}

.card {
  cursor: pointer;
}

.card:hover {
  transform: scale(1.02);
  box-shadow:
    0px 2px 5px rgba(0, 0, 0, 0.05),
    0px 20px 30px rgba(0, 0, 0, 0.05);
}

.badge {
  background: #000;
  color: #fff;
}

.timestamp {
  text-align: right;
  font-size: xx-small;
}
</style>
