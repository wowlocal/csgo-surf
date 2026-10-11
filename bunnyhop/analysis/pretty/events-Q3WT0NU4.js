var e = new (class {
  listeners = [];
  on(e) {
    return (
      this.listeners.push(e),
      () => {
        let t = this.listeners.indexOf(e);
        t >= 0 && this.listeners.splice(t, 1);
      }
    );
  }
  emit(e, t) {
    let n = this.listeners;
    for (let r = 0; r < n.length; r++)
      try {
        n[r](e, t);
      } catch (e) {
        console.warn(`event listener:`, e);
      }
  }
})();
export { e as t };
