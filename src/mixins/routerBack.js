export const routerBack = {
  methods: {
    routerBack(name, param, val, q) {
      if (param && val && q) {
        console.log("here")
        this.$router.push({
          name: name,
          params: {
            param: val,
          },
          query: q,
        })
      } else if (param && val) {
        this.$router.push({
          name: name,
          params: {
            param: val,
          },
        })
        console.log("there")
      } else {
        this.$router.push({
          name: name,
        })
      }
    },
  },

}
