package com.natgx.expensetrackerback.expenses;

import com.natgx.expensetrackerback.expenses.category.dto.ExpenseCategoryDto;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;

public abstract class ExpenseTest {

    protected final <T> Optional<T> findById(long id, List<T> objects, Function<T, Long> idGetter) {
        return objects.stream().filter(hasEqualId(id, idGetter)).findFirst();
    }

    private <T> Predicate<T> hasEqualId(long id, Function<T, Long> idGetter) {
        return obj -> idGetter.apply(obj) == id;
    }

}
