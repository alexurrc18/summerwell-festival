package me.alexandruc.summerwell.api.ticket_type;

import org.springframework.stereotype.Component;

import me.alexandruc.summerwell.core.ticket_type.TicketType;

@Component
public class TicketTypeMapper {
    public TicketTypeData toData(TicketType ticketType) {
        if (ticketType == null) return null;

        TicketTypeData data = new TicketTypeData();
        data.setTicketId(ticketType.getTicketId().toString());
        data.setName(ticketType.getName());
        data.setType(ticketType.getType());
        data.setYear(ticketType.getYear());
        data.setPrice(ticketType.getPrice());
        data.setStock(ticketType.getStock());
        data.setColor(ticketType.getColor());

        return data;
    }
}
