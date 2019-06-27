export const routerBack = {
  methods: {
    routerBack(name, param, val) {
      if (param && val) {
        this.$router.push({
          name: name,
          params: {
            param: val,
          },
        })
      } else {
        this.$router.push({
          name: name,
        })
      }
    },
  },

}
