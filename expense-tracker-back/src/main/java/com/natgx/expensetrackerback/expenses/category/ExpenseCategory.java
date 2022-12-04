package com.natgx.expensetrackerback.expense.category;

import com.natgx.expensetrackerback.expense.category.dto.ExpenseCategoryDto;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ExpenseCategory {

    @Id
    @Getter
    @GeneratedValue
    Long id;

    @Column(unique = true)
    String name;

    public ExpenseCategoryDto dto() {
        return new ExpenseCategoryDto(name);
    }

}
