package com.axellience.vuegwt.processors.component.template.parser.context.localcomponents;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import javax.lang.model.type.TypeMirror;

public class LocalComponents {

  private final Map<String, LocalComponent> localComponentsMap;

  public LocalComponents() {
    localComponentsMap = new HashMap<>();
  }

  public LocalComponent addLocalComponent(String tagName, TypeMirror componentType) {
    LocalComponent localComponent = new LocalComponent(tagName, componentType);
    localComponentsMap.put(tagName, localComponent);
    return localComponent;
  }

  public Optional<LocalComponent> getLocalComponent(String tagName) {
    if (!localComponentsMap.containsKey(tagName)) {
      return Optional.empty();
    }

    return Optional.of(localComponentsMap.get(tagName));
  }

  public boolean hasLocalComponent(String tagName) {
    return localComponentsMap.containsKey(tagName);
  }
}
