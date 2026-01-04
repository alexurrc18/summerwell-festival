package me.alexandruc.summerwell.api.stage;

import org.springframework.stereotype.Component;
import me.alexandruc.summerwell.core.stage.Stage;

@Component
public class StageMapper {

    public StageData toStageData(Stage stage) {
        StageData stageData = new StageData();
        stageData.setId(stage.getId());
        stageData.setName(stage.getName());
        stageData.setColor(stage.getColor());
        return stageData;
    }
}