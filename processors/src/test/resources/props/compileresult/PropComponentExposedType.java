package props;

import com.axellience.vuegwt.core.client.component.options.VueComponentOptions;
import elemental2.core.Function;
import javax.annotation.Generated;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsPropertyMap;

@Generated(
    value = "com.axellience.vuegwt.processors.component.ComponentExposedTypeGenerator",
    comments = "https://github.com/Axellience/vue-gwt"
)
public class PropComponentExposedType extends PropComponent {

  @JsMethod
  private void vuegwt_prop$myProp(int myProp) {
    this.myProp = myProp;
  }

  public VueComponentOptions<PropComponent> getOptions() {
    VueComponentOptions<PropComponent> options = new VueComponentOptions<PropComponent>();
    Proto p = this.__proto__;
    options.setComponentExportedTypePrototype(p);
    options.addJavaProp("myProp", false, null);
    options.addJavaWatch(p.vuegwt_prop$myProp, "myProp", false, true);
    options.addHookMethod("created", p.vuegwt$created);
    options.initData(true, VueGWTTools.getFieldsName(this, () -> {
      this.myProp = 1;
    }));
    return options;
  }

  @JsType(
      isNative = true,
      namespace = JsPackage.GLOBAL,
      name = "Object"
  )
  private static class Proto implements JsPropertyMap<Object> {

    public Function vuegwt_prop$myProp;

    public Function vuegwt$created;
  }
}