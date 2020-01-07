export const routerBack = {
  methods: {
    routerBack(name, param, val, q) {
      if (param && val && q) {
        if(param === 'topic')
        {
          this.$router.push({
            name: name,
            params: {
              topic: val,
            },
            query: q,
          })
        }
        else if(param === 'level')
        {
          this.$router.push({
            name: name,
            query: {
              lv: q.lv,
            },
          })
        }
        else {
          this.$router.push({
            name: name,
            params: {
              param: val,
            },
            query: q,
          })
        }

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
